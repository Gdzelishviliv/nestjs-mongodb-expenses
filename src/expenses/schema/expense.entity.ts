import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Expense {
  @Prop()
  id:number
  
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  amount: number;
}

const expenseScheme = SchemaFactory.createForClass(Expense);
export { expenseScheme };
