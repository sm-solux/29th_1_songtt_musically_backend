import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGODB_URI ?? 'mongodb://localhost:27017/mydatabase')],
})

export class AppModule {}
