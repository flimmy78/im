package com.feiniu.webim.util.encrypt;


import javax.crypto.Cipher;
import javax.crypto.KeyGenerator;
import javax.crypto.spec.SecretKeySpec;
import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.net.URLEncoder;
import java.security.Key;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.util.UUID;

public class AES {
	/**
	 * 加密
	 * 
	 * @param content
	 *            需要加密的内容
	 * @param password
	 *            加密密码
	 * @return
	 */
	public static byte[] encrypt(byte[] data, byte[] key) {
		CheckUtils.notEmpty(data, "data");
		CheckUtils.notEmpty(key, "key");
		if(key.length!=16){
			throw new RuntimeException("Invalid AES key length (must be 16 bytes)");
		}
		try {
            SecretKeySpec secretKey = new SecretKeySpec(key, "AES");
            byte[] enCodeFormat = secretKey.getEncoded();
            SecretKeySpec seckey = new SecretKeySpec(enCodeFormat, "AES");
            Cipher cipher = Cipher.getInstance(ConfigureEncryptAndDecrypt.AES_ALGORITHM);// 创建密码器
            cipher.init(Cipher.ENCRYPT_MODE, seckey);// 初始化
            byte[] result = cipher.doFinal(data);
            return result; // 加密
        } catch (Exception e){
			throw new RuntimeException("encrypt fail!", e);
		}
	}

	/**
	 * 解密
	 * 
	 * @param content
	 *            待解密内容
	 * @param password
	 *            解密密钥
	 * @return
	 */
	public static byte[] decrypt(byte[] data, byte[] key) {
		CheckUtils.notEmpty(data, "data");
		CheckUtils.notEmpty(key, "key");
		if(key.length!=16){
			throw new RuntimeException("Invalid AES key length (must be 16 bytes)");
		}
		try {
			SecretKeySpec secretKey = new SecretKeySpec(key, "AES"); 
			byte[] enCodeFormat = secretKey.getEncoded();
			SecretKeySpec seckey = new SecretKeySpec(enCodeFormat, "AES");
			Cipher cipher = Cipher.getInstance(ConfigureEncryptAndDecrypt.AES_ALGORITHM);// 创建密码器
			cipher.init(Cipher.DECRYPT_MODE, seckey);// 初始化
			byte[] result = cipher.doFinal(data);
			return result; // 加密
		} catch (Exception e){
			throw new RuntimeException("decrypt fail!", e);
		}
	}
	
	public static String encryptToBase64(String data, String key){
		try {
			byte[] valueByte = encrypt(data.getBytes(ConfigureEncryptAndDecrypt.CHAR_ENCODING), key.getBytes(ConfigureEncryptAndDecrypt.CHAR_ENCODING));
			return new String(Base64.encode(valueByte));
		} catch (UnsupportedEncodingException e) {
			throw new RuntimeException("encrypt fail!", e);
		}
		
	}
	
	public static String decryptFromBase64(String data, String key){
		try {
			byte[] originalData = Base64.decode(data.getBytes());
			byte[] valueByte = decrypt(originalData, key.getBytes(ConfigureEncryptAndDecrypt.CHAR_ENCODING));
			return new String(valueByte, ConfigureEncryptAndDecrypt.CHAR_ENCODING);
		} catch (UnsupportedEncodingException e) {
			throw new RuntimeException("decrypt fail!", e);
		}
	}
	
	public static String encryptWithKeyBase64(String data, String key){
		try {
			byte[] valueByte = encrypt(data.getBytes(ConfigureEncryptAndDecrypt.CHAR_ENCODING), Base64.decode(key.getBytes()));
			return new String(Base64.encode(valueByte));
		} catch (UnsupportedEncodingException e) {
			throw new RuntimeException("encrypt fail!", e);
		}
	}
	
	public static String decryptWithKeyBase64(String data, String key){
		try {
			byte[] originalData = Base64.decode(data.getBytes());
			byte[] valueByte = decrypt(originalData, Base64.decode(key.getBytes()));
			return new String(valueByte, ConfigureEncryptAndDecrypt.CHAR_ENCODING);
		} catch (UnsupportedEncodingException e) {
			throw new RuntimeException("decrypt fail!", e);
		}
	}
	
	public static byte[] genarateRandomKey(){
		KeyGenerator keygen = null;
		try {
			keygen = KeyGenerator.getInstance(ConfigureEncryptAndDecrypt.AES_ALGORITHM);
		} catch (NoSuchAlgorithmException e) {
			throw new RuntimeException(" genarateRandomKey fail!", e);
		}
		SecureRandom random = new SecureRandom();
		keygen.init(random);
		Key key = keygen.generateKey();
		return key.getEncoded();
	}
	
	public static String genarateRandomKeyWithBase64(){
		return new String(Base64.encode(genarateRandomKey()));
	}

	public static void main(String[] args) throws Exception{
		String data = UUID.randomUUID().toString() + System.currentTimeMillis();
		String key = "feiniu-webim2015";

		String e = encryptToBase64(data, key);
		String d = decryptFromBase64(e, key);

		System.out.println(e);
		System.out.println(d);

		String urlEncoded = URLEncoder.encode(e, "utf-8");
		System.out.println("encoded: " + urlEncoded);
		System.out.println("decoded: " + URLDecoder.decode(urlEncoded, "utf-8"));

		System.out.println(MD5.getMD5(data));
	}
}
