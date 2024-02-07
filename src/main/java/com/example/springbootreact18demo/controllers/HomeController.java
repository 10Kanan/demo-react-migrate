package com.example.springbootreact18demo.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping("/")
    public String index(Model model) {
        model.addAttribute("message", "Hello World");
        return "index";
    }

    @GetMapping("/pageone")
    public String pageOne() {
        return "pageone"; // สมมติว่ามีไฟล์ "pageone.html" อยู่ในโฟลเดอร์ templates
    }
}
