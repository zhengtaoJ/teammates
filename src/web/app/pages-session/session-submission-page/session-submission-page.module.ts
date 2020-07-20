import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { AjaxLoadingModule } from '../../components/ajax-loading/ajax-loading.module';
import {
  QuestionSubmissionFormModule,
} from '../../components/question-submission-form/question-submission-form.module';
import { TeammatesCommonModule } from '../../components/teammates-common/teammates-common.module';
import { SavingCompleteModalComponent } from './saving-complete-modal/saving-complete-modal.component';
import { SessionSubmissionPageComponent } from './session-submission-page.component';

const routes: Routes = [
  {
    path: '',
    component: SessionSubmissionPageComponent,
  },
];

/**
 * Module for feedback session submission page.
 */
@NgModule({
  imports: [
    AjaxLoadingModule,
    TeammatesCommonModule,
    CommonModule,
    FormsModule,
    NgbTooltipModule,
    QuestionSubmissionFormModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    SavingCompleteModalComponent,
    SessionSubmissionPageComponent,
  ],
  exports: [
    SessionSubmissionPageComponent,
  ],
  entryComponents: [
    SavingCompleteModalComponent,
  ],
})
export class SessionSubmissionPageModule { }
