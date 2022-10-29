import { NgModule } from "@angular/core";
import {MatToolbarModule} from '@angular/material/toolbar'

//Marks the behavior of the module
@NgModule({
    exports: [MatToolbarModule]
})

export class MaterialModule {}