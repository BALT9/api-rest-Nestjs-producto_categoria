// Decorador de TypeORM

import { Product } from "src/product/entities/product.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn,  } from "typeorm";

@Entity()
export class Category {

    @PrimaryGeneratedColumn() //autoincrementable 
    id: number;

    @Column()
    name: string;

    @Column({nullable: true})
    description: string;

    @OneToMany(() => Product, product => product.category)
    products: Product[];

}
