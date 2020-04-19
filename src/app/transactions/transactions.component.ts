import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  question: string;
  file: File;
  transactionList: any[] = [];
  constructor() { }

  ngOnInit() {
    const t1 = {
      id: '1',
      question: 'What is your name?',
      document: 'Biodata.pdf',
      answer: 'Alok Sharma',
      rank: '1',
      interpretation: 'Your name is Alok.'
    };
    this.transactionList.push(t1);
  }
  selectedQuestion(event) {
    this.question = event.target.value;
  }
  selectedFile(event) {
    this.file = event.target.files[0];
  }
  onSubmit() {
  }
}
