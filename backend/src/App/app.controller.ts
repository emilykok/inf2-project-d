import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { UserService } from '../User/user.service';
import { MessageService } from '../Message/message.service';
import { User as UserModel, Message as MessageModel } from '@prisma/client';

@Controller()
export class AppController {
  constructor(
    private readonly userService: UserService,
    private readonly messageService: MessageService,
  ) {}

  @Post('/users')
  async createUser(@Body() user: UserModel): Promise<UserModel> {
    return this.userService.createUser(user);
  }
}

//   @Get('post/:id')
//   async getPostById(@Param('id') id: string): Promise<PostModel> {
//     return this.postService.post({ id: Number(id) });
//   }

//   @Get('feed')
//   async getPublishedPosts(): Promise<PostModel[]> {
//     return this.postService.posts({
//       where: { published: true },
//     });
//   }

//   @Get('filtered-posts/:searchString')
//   async getFilteredPosts(
//     @Param('searchString') searchString: string,
//   ): Promise<PostModel[]> {
//     return this.postService.posts({
//       where: {
//         OR: [
//           {
//             title: { contains: searchString },
//           },
//           {
//             content: { contains: searchString },
//           },
//         ],
//       },
//     });
//   }

//   @Post('post')
//   async createDraft(
//     @Body() postData: { title: string; content?: string; authorEmail: string },
//   ): Promise<PostModel> {
//     const { title, content, authorEmail } = postData;
//     return this.postService.createPost({
//       title,
//       content,
//     });
//   }

//   @Post('user')
//   async signupUser(
//     @Body() userData: { name?: string; email: string },
//   ): Promise<UserModel> {
//     return this.userService.createUser(userData);
//   }

//   @Put('publish/:id')
//   async publishPost(@Param('id') id: string): Promise<PostModel> {
//     return this.postService.updatePost({
//       where: { id: Number(id) },
//       data: { published: true },
//     });
//   }

//   @Delete('post/:id')
//   async deletePost(@Param('id') id: string): Promise<PostModel> {
//     return this.postService.deletePost({ id: Number(id) });
//   }
// }
