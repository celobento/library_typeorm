import { User } from "src/users/user.entity";
import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Book {
    
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string
    
    @Column()
    price: number

    @Column()
    author: string

    @ManyToOne(() => User, (user) => user.books)
    user: User
}