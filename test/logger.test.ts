import { describe, expect, it } from "vitest";
import Loglestial from "../src/index";

describe("Loglestial", () => {
  it("init returns a logger with level methods", () => {
    const logger = Loglestial.init();
    expect(logger).toBeDefined();
    expect(typeof logger.info).toBe("function");
    expect(typeof logger.error).toBe("function");
  });
});
