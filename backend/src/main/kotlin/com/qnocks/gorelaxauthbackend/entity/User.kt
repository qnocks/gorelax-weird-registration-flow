package com.qnocks.gorelaxauthbackend.entity

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id
import javax.validation.constraints.NotNull

@Entity
data class User(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long?,

    @field:NotNull(message = "This field shouldn't be blank")
    val username: String,

    @field:NotNull(message = "This field shouldn't be blank")
    val password: String,

    @field:NotNull(message = "This field shouldn't be blank")
    val phone: String,

    @field:NotNull(message = "This field shouldn't be blank")
    val email: String
)
