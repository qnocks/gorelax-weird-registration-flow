package com.qnocks.gorelaxauthbackend.dto

data class RegisterRequest(
    val username: String,
    val password: String,
    val phone: String,
    val email: String
)
