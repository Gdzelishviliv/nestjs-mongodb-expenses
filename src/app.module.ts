import { Module } from '@nestjs/common';
import { ExpensesModule } from './expenses/expenses.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://gdzelishvili:nest-app@crud-app.fqokwhm.mongodb.net/?retryWrites=true&w=majority&appName=crud-app',
    ),
    ExpensesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
