function safeJSONParse(jsonStr: string): unknown {
    try {
      return JSON.parse(jsonStr);
    } catch {
      return null;
    }
  }

const jsonStr = '{"name":"vichel}';

const jsonObj = safeJSONParse(jsonStr);

// (jsonObj as {name:string}).name