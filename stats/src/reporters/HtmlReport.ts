import { Reporter } from '../Summary';
import { writeFileSync } from 'fs';

export class HtmlReport implements Reporter {
    report(data: number): void {
        const html = `
       <div>
       <h1>Output of analysis</h1>
       <div>The team won ${data} times</div>
       </div>
     `;
        writeFileSync('reportByHtml.html', html);
    }
}
