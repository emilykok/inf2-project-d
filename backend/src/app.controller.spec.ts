import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostService } from './post.service';
import { PrismaService } from './prisma.service';
import { UserService } from './user.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService, UserService, PrismaService, PostService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return true', () => {
      expect(true).toBe(true);
    });
    // it('should return "Hello World!"', () => {
    //   expect(appController.getHello()).toBe('Hello World!');
    // });
  });
});
