package com.example.springbootreact18demo.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping("/")
    public String index() {
        return "index";
    }

    @GetMapping("/pageone")
    public String pageOne() {
        return "pageone"; // สมมติว่ามีไฟล์ "pageone.html" อยู่ในโฟลเดอร์ templates
    }
}
