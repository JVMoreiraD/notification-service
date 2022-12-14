import { Module } from "@nestjs/common";
import { PrismaService } from "./database/prisma/prisma.service";
import { AppController } from "./infra/nest/app.controller";

@Module({
	imports: [],
	controllers: [AppController],
	providers: [PrismaService],
})
export class AppModule {}
