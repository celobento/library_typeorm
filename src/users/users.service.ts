import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private repo: Repository<User>
    ){}

    findAll() {
        return this.repo.find()
    }

    create(email: string, password: string) {
        const user = this.repo.create({
            email, password
        })
        return this.repo.save(user)
    }

    async findOne(id: string): Promise<User> {
        const user =  await this.repo.findOne({where: {id: id}})
        if(!user) {
            throw new NotFoundException('user not found')
        }
        return user
    }
}
