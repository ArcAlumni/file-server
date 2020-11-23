package com.fs.fs.controller;

import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.springframework.stereotype.Controller;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
@RequestMapping("/fs")
public class FileSystemController {

    @GetMapping
    String get() {
        return "index";
    }

    @PostMapping("/uploadFiles")
    String uploadFiles(@RequestParam("file") MultipartFile[] files, RedirectAttributes attributes) {

        for (MultipartFile file : files) {
            uploadFile(file);
        }

        attributes.addFlashAttribute("message", "You successfully uploaded all files");

        return "redirect:/";
    }

    boolean uploadFile(MultipartFile file) {

        String fileName = StringUtils.cleanPath(file.getOriginalFilename());

        try {
            Path path = Paths.get(System.getProperty("user.home")+"/Downloads/" + fileName);
            FileOutputStream out = new FileOutputStream(path.toFile());
            InputStream in = file.getInputStream();
            long sizeTransferred = 0;
            byte[] buffer = new byte[2048];
            int len;
            long totalLen = file.getSize() / 1024 / 1024;
            int c = 0;
            while ((len = in.read(buffer)) > 0) {
                sizeTransferred += len;
                if (c % 1000 == 0)
                    System.out.println("Transferred " + file.getOriginalFilename() + " "
                            + (int) (((double) (sizeTransferred / 1024 / 1024) / (double) totalLen) * 100) + " %");
                out.write(buffer, 0, len);
                c++;
            }
            out.flush();
            out.close();
            in.close();
            System.out.println("Transferred " + file.getOriginalFilename());
        } catch (IOException e) {
            System.err.println(e.getMessage());
        }

        return true;
    }
}
