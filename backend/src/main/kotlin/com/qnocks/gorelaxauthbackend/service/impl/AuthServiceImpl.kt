package com.qnocks.gorelaxauthbackend.service.impl

import com.qnocks.gorelaxauthbackend.dto.RegisterRequest
import com.qnocks.gorelaxauthbackend.entity.User
import com.qnocks.gorelaxauthbackend.mapper.UserMapper
import com.qnocks.gorelaxauthbackend.repository.UserRepository
import com.qnocks.gorelaxauthbackend.service.AuthService
import org.springframework.stereotype.Service

@Service
class AuthServiceImpl(
    private val userRepository: UserRepository,
    private val userMapper: UserMapper) : AuthService {

    override fun register(request: RegisterRequest) {
        // TODO: add validation
        userRepository.save(userMapper.toEntity(request))
    }

    override fun test(): List<User> {
        return userRepository.findAll() as List<User>
    }
}
