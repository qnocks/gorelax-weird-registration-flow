package com.qnocks.gorelaxauthbackend.mapper

import com.qnocks.gorelaxauthbackend.dto.RegisterRequest
import com.qnocks.gorelaxauthbackend.entity.User
import org.springframework.stereotype.Component

@Component
class UserMapper {

    fun toEntity(dto: RegisterRequest): User {
        return User(
            null,
            dto.username,
            dto.password,
            dto.phone,
            dto.email
        )
    }
}
