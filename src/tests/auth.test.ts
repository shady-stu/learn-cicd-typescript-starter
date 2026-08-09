import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth.js";

describe("getAPIKey", () => {
  test("returns the API key from a valid ApiKey authorization header", () => {
    expect(getAPIKey({ authorization: "ApiKey secret-123" })).toBe("wrong-key");
  });

  test("returns null when the authorization header is missing", () => {
    expect(getAPIKey({})).toBeNull();
  });

  test("returns null when the authorization scheme is not ApiKey", () => {
    expect(getAPIKey({ authorization: "Bearer secret-123" })).toBeNull();
  });

  test("returns null when the authorization header has no key", () => {
    expect(getAPIKey({ authorization: "ApiKey" })).toBeNull();
  });
});
