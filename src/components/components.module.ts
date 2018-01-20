import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { TextToggleComponent } from './text-toggle/text-toggle';
@NgModule({
	declarations: [TextToggleComponent],
	imports: [IonicModule.forRoot(TextToggleComponent)],
	exports: [TextToggleComponent]
})
export class ComponentsModule {}
