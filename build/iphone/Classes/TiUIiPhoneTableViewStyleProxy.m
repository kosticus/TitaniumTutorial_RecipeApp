/**
 * Appcelerator Titanium Mobile
 * Copyright (c) 2009-2016 by Appcelerator, Inc. All Rights Reserved.
 * Licensed under the terms of the Apache Public License
 * Please see the LICENSE included with this distribution for details.
 * 
 * WARNING: This is generated code. Modify at your own risk and without support.
 */
#if defined(USE_TI_UIIPHONETABLEVIEWSTYLE) || defined(USE_TI_UIIPHONELISTVIEWSTYLE)
#import "TiBase.h"
#import "TiUIiPhoneTableViewStyleProxy.h"

@implementation TiUIiPhoneTableViewStyleProxy

-(NSString*)apiName
{
    return @"Ti.UI.iPhone.TableViewStyle";
}

MAKE_SYSTEM_PROP_DEPRECATED_REPLACED(PLAIN,     UITableViewStylePlain,@"UI.iPhone.ListViewStyle.PLAIN",@"5.4.0",@"UI.iOS.ListViewStyle.PLAIN");
MAKE_SYSTEM_PROP_DEPRECATED_REPLACED(GROUPED,   UITableViewStyleGrouped,@"UI.iPhone.ListViewStyle.GROUPED",@"5.4.0",@"UI.iOS.ListViewStyle.GROUPED");

@end

#endif