import { Module } from "@nestjs/common";
import { PrismaService } from "./database/prisma/prisma.service";
import { AppController } from "./app.controller";

@Module({
	imports: [],
	controllers: [AppController],
	providers: [PrismaService],
})
export class AppModule {}
