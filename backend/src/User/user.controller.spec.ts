// Unit test file for the user.controller

import { Test } from '@nestjs/testing';
import { User } from '@prisma/client';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import type { PaginationQueryInput } from '@Libraries/interfaces/pagination.interface';
//import {} from '@Libraries/unit-tests';                 //TODO: Ask stijn what to do with this error
//import { PublicUser } from '@lib/unit-tests/types';
import { v4 as uuidv4 } from 'uuid';
import { ForbiddenException } from '@nestjs/common';

import { ROUTE_ARGS_METADATA } from '@nestjs/common/constants';
import { CurrentUser } from '@decorators';
import * as httpMock from 'node-mocks-http';
import { ExecutionContextHost } from '@nestjs/core/helpers/execution-context-host';
