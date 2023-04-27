declare module "@vercel/ncc" {
  interface Options {
    externals: Array<string>;
    minify?: boolean;
    sourceMap?: boolean;
    sourceMapRegister?: boolean;
    quiet?: boolean;
    debugLog?: boolean;
    cache?: boolean;
  }

  interface Output {
    code: string;
  }

  const compiler: (path: string, options: Options) => Promise<Output>;

  export = compiler;
}
