import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { Expense } from './schema/expense.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ExpensesService {
  constructor(
    @InjectModel(Expense.name) private expensesModule: Model<Expense>,
  ) {}
  
  async create(createExpenseDto: CreateExpenseDto) {
    const countExpense= await this.expensesModule.countDocuments();
    const expense = await this.expensesModule.create(createExpenseDto);
    expense.id=countExpense+1;
    const savedExpense= await expense.save();
    if (!savedExpense) {
      throw new HttpException('expense not found', HttpStatus.BAD_REQUEST);
    }
    return savedExpense;
  }

  findAll() {
    return this.expensesModule.find();
  }

  async findOne(id) {
    const expense = await this.expensesModule.findOne({id:id}).exec();
    if (!expense) {
      throw new HttpException('expense not found', HttpStatus.NOT_FOUND);
    }
    return expense;
  }

  async update(id: number, updateExpenseDto: UpdateExpenseDto) {
    const updateExpense= await this.expensesModule.findOneAndUpdate({id:id},updateExpenseDto, {new:true}).exec();
    if (!updateExpense) {
      throw new HttpException('expense not found', HttpStatus.NOT_FOUND);
    }
    return updateExpense;
  }

  async remove(id: number) {
    const deleteExpense = await this.expensesModule.findOneAndDelete({id:id}).exec();
    if (!deleteExpense) {
      throw new HttpException('expense not found', HttpStatus.NOT_FOUND);
    }
    return deleteExpense;
  }
}
