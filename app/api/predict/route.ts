export async function POST(req: Request) {
  const data = await req.json();

  const { income, loanAmount, creditScore } = data;

  let approved = false;

  if (creditScore > 650 && income > loanAmount * 2) {
    approved = true;
  }

  return Response.json({
    status: approved ? "Approved" : "Rejected",
  });
}