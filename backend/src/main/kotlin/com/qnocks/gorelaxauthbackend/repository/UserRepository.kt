package com.qnocks.gorelaxauthbackend.repository

import com.qnocks.gorelaxauthbackend.entity.User
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository

@Repository
interface UserRepository : CrudRepository<User, String>
