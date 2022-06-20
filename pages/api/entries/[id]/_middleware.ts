import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  const id = req.page.params?.id || "";

  console.log(req.method);

  const checkMongoIDRegExp = new RegExp("^[0-9a-fA-F]{24}$");

  if (!checkMongoIDRegExp.test(id as string)) {
    //return res.status(400).json({ message: "El id no es válido " + id });

    return new Response(
      JSON.stringify({ messagge: 'El id no es válido "  ' + id }),
      {
        status: 400,
        headers: {
          "Content-Type": "aplication/json",
        },
      }
    );
  }
  return NextResponse.next();
}
