package com.qnocks.gorelaxauthbackend.controller

import com.qnocks.gorelaxauthbackend.dto.RegisterRequest
import com.qnocks.gorelaxauthbackend.entity.User
import com.qnocks.gorelaxauthbackend.service.AuthService
import org.springframework.validation.annotation.Validated
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = ["http://localhost:4200"])
class AuthController(private val authService: AuthService) {

    @PostMapping("/register")
    fun register(@Validated @RequestBody request: RegisterRequest) {
        authService.register(request)
    }

    @GetMapping("/users")
    fun getRegisteredUsers(): List<User> {
        return authService.test()
    }
}
