import { AuthGuard } from '../Authenticator/guards/auth.guard';
import { PrismaModule } from '../../prisma/prima.module';
import { ProviderModule } from '../Providers/provider.module';
import { UserModule } from '../User/user.module';
import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AuthModule } from '../Authenticator/auth.module';
import { AppController } from './app.controller';

@Module({
  imports: [PrismaModule, ProviderModule, AuthModule, UserModule],
  controllers: [AppController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
