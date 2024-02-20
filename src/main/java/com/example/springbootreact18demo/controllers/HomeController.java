package com.example.springbootreact18demo.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;


@Controller
public class HomeController {

    @GetMapping("/")
    public String index() {
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