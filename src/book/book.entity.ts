import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({name:'books'})
export class BookEntity {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({ name:'name', type: 'varchar', length:'30', comment:'El nombre del libro'})
    name:string;

    @Column({ name:'lastname', type: 'varchar', length:'50',comment:'El apellido del autor'})
    lastname:string;

    @Column( {name:'email', type:'varchar', length:'50', comment:'El email del autor'})
    email:string;

    @Column({name:'telephone', type: 'varchar',default:'+500' ,comment:'Telefono del autor'})
    telephone:string;

    @Column({name:'age', type: 'integer', nullable:true  ,comment:'La edad del autor'})
    age:number;

    @Column({name:'state', type: 'boolean',default:true, comment:'Estado del autor'})
    state:boolean;

    @Column({name:'blood_type'})
    bloodType:string;


}

