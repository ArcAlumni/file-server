package com.fs.fs;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class FsApplication {

	public static void main(String[] args) {
		try{
			SpringApplication.run(FsApplication.class, args);
		}catch(Throwable t){
			;
		}
	}

}
