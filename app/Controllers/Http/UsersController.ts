// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { HttpContext } from "@adonisjs/http-server/build/standalone";
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


    public async index (){

        const all = await User.all()
        console.log(User)
        return all;
    }
    
    
        

    


}
