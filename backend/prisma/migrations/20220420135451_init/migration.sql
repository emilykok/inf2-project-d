/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `GlucoseMeter` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "GlucoseMeter_userId_key" ON "GlucoseMeter"("userId");
