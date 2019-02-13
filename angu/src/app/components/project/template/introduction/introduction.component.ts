import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import { JarwisService } from 'src/app/Service/jarwis.service';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {

  public Editor = ClassicEditor;
  constructor(
    private Jarwis : JarwisService
  ) {
    
   }

  public editordata = this.Jarwis.getintro().subscribe(
    data => this.editordata = data
  )
  public form = {
    template : null
  }
  ngOnInit() {
    
  }

  

  onReady(editor) {
    editor.ui.view.editable.element.parentElement.insertBefore(
      editor.ui.view.toolbar.element,
      editor.ui.view.editable.element
    );
  }

  public onChange({ editor }: ChangeEvent) {
    this.form.template = editor.getData();
  }

  submit() {
    this.Jarwis.intro(this.form).subscribe();

    window.location.reload();
  }

}
