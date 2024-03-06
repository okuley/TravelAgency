package com.soa.travelagency.admin;

import jakarta.persistence.*;

@Entity
@Table
public class Admin {

    @jakarta.persistence.Id
    @SequenceGenerator(
            name="admin_sequence",
            sequenceName="admin_sequence",
            allocationSize =1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator="admin_sequence"
    )
    private long id;
    private String email;
    private String password;

    public Admin() {
    }

    public Admin(long id, String email, String password) {
        this.id = id;
        this.email = email;
        this.password = password;
    }

    public Admin(String email, String password) {
        this.email = email;
        this.password = password;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
