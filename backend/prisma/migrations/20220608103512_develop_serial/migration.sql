/*
  Warnings:

  - A unique constraint covering the columns `[serial]` on the table `GlucoseMeter` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "Agenda" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "begintime" TEXT NOT NULL,
    "endtime" TEXT NOT NULL,
    "titel" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Agenda_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "GlucoseMeter_serial_key" ON "GlucoseMeter"("serial");

-- AddForeignKey
ALTER TABLE "Agenda" ADD CONSTRAINT "Agenda_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
