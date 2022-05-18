package com.qnocks.gorelaxauthbackend.service

import com.qnocks.gorelaxauthbackend.dto.RegisterRequest
import com.qnocks.gorelaxauthbackend.entity.User

interface AuthService {

    fun register(request: RegisterRequest)

    fun test(): List<User>
}
