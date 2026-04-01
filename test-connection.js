const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  try {
    await prisma.$connect();
    console.log("✅ SUCCESSFULLY CONNECTED TO NEON!");
  } catch (e) {
    console.error("❌ CONNECTION FAILED:", e.message);
  } finally {
    await prisma.$disconnect();
  }
}
main();