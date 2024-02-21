package com.example.springbootreact18demo.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;


@Controller
public class HomeController {

    @GetMapping("/")
    public String index(ModelMap mode) {
        mode.addAttribute("bosskoko", "sawaddeekabb");
        return "index";
    }

    @GetMapping("/pageone")
    public String pageOne() {
        return "index"; 
    }

//     @GetMapping("/product/{id}")
//    public String getProduct(@PathVariable Long id) {
//        return "index";
//    }
//
}