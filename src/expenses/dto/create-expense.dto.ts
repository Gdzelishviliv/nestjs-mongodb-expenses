import { IsCurrency, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateExpenseDto {
    @IsNumber()
    id:number

    @IsString()
    @IsNotEmpty()
    name:string;

    // @IsNumber()
    @IsCurrency()
    @IsNotEmpty()
    amount:number;
}
