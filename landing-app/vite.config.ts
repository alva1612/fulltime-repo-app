import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import z, { ZodRawShape } from "zod";

// https://vitejs.dev/config/

export default defineConfig(({ mode }) => {
  const currentEnv = loadEnv(mode, process.cwd(), "");

  const zodSchema: z.ZodObject<ZodRawShape> = z.object({
    VITE_API_URL: z.string().url(),
    BUCKET_URL: z.string().url().optional(),
  });

  zodSchema.parse(currentEnv);
  console.log(currentEnv.BUCKET_URL);

  return {
    plugins: [react()],
    experimental: {
      renderBuiltUrl(filename) {
        if (!currentEnv.BUCKET_URL) return filename;
        const resultingFilename = currentEnv.BUCKET_URL + "/" + filename;
        return resultingFilename;
      },
    },
  };
});
