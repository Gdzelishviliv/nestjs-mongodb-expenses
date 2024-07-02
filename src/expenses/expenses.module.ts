import { Module } from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { ExpensesController } from './expenses.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Expense, expenseScheme } from './schema/expense.entity';

@Module({
  imports:[MongooseModule.forFeature([{name:Expense.name,schema:expenseScheme}])],
  controllers: [ExpensesController],
  providers: [ExpensesService],
})
export class ExpensesModule {}
