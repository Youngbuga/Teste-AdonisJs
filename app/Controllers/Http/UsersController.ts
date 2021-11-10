// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { HttpContext, Request, Response, Router } from "@adonisjs/http-server/build/standalone";
import User from "App/Models/User";
import User from "App/Models/User";
import User from "App/Models/User";

export default class UsersController {

    public async create ({request}:HttpContext){
        const { name, username } = request.only([ "name", "username"]);

        const user = await User.create({
            username,
            name,
        })
        return user;

}
