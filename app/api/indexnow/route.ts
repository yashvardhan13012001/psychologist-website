import { NextRequest, NextResponse } from "next/server";

const INDEXNOW_KEY = "2d73c7fd342341afbdd171a26dab4c3e";
const BASE_URL = "https://www.chaitanyaraj.com";
const HOST = "www.chaitanyaraj.com";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => null);

    if (!body) {
      return NextResponse.json(
        { error: "Invalid request body." },
        { status: 400 }
      );
    }

    const { urls } = body as {
      urls?: string[];
    };

    if (!Array.isArray(urls) || urls.length === 0) {
      return NextResponse.json(
        { error: "Please provide at least one URL." },
        { status: 400 }
      );
    }

    // Only allow URLs belonging to this website.
    const validUrls = urls.filter((url) => {
      try {
        const parsedUrl = new URL(url);

        return (
          parsedUrl.protocol === "https:" &&
          parsedUrl.hostname === HOST
        );
      } catch {
        return false;
      }
    });

    if (validUrls.length === 0) {
      return NextResponse.json(
        { error: "No valid Chaitanya Raj URLs were provided." },
        { status: 400 }
      );
    }

    // IndexNow supports bulk URL submission.
    const indexNowResponse = await fetch(
      "https://api.indexnow.org/IndexNow",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({
          host: HOST,
          key: INDEXNOW_KEY,
          keyLocation: `${BASE_URL}/${INDEXNOW_KEY}.txt`,
          urlList: validUrls,
        }),
        cache: "no-store",
      }
    );

    const responseText = await indexNowResponse.text();

    if (!indexNowResponse.ok) {
      console.error(
        "IndexNow submission failed:",
        indexNowResponse.status,
        responseText
      );

      return NextResponse.json(
        {
          success: false,
          status: indexNowResponse.status,
          error: "IndexNow submission failed.",
          response: responseText || null,
        },
        {
          status: indexNowResponse.status,
        }
      );
    }

    return NextResponse.json({
      success: true,
      message: "URLs submitted successfully to IndexNow.",
      submittedCount: validUrls.length,
      submittedUrls: validUrls,
      indexNowStatus: indexNowResponse.status,
    });
  } catch (error) {
    console.error("IndexNow route error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong while submitting URLs.",
      },
      {
        status: 500,
      }
    );
  }
}