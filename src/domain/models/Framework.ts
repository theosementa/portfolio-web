import { Taggable } from "../interface/Taggable"

export interface Framework extends Taggable {
  name: string
  link: string
}

export class FrameworkData {
  static swiftUI: Framework = {
    name: "SwiftUI",
    link: "https://developer.apple.com/xcode/swiftui/"
  }
  static charts: Framework = {
    name: "Charts",
    link: "https://developer.apple.com/documentation/charts"
  }
  static storeKit: Framework = {
    name: "StoreKit",
    link: "https://developer.apple.com/storekit/"
  }
  static appIntents: Framework = {
    name: "AppIntents",
    link: "https://developer.apple.com/documentation/appintents"
  }
  static coreData: Framework = {
    name: "CoreData",
    link: "https://developer.apple.com/documentation/coredata"
  }
  static cloudKit: Framework = {
    name: "CloudKit",
    link: "https://developer.apple.com/documentation/cloudkit"
  }
  static visionKit: Framework = {
    name: "VisionKit",
    link: "https://developer.apple.com/documentation/visionkit"
  }
  static userNotifications: Framework = {
    name: "UserNotifications",
    link: "https://developer.apple.com/documentation/usernotifications"
  }
  static googleSignIn: Framework = {
    name: "GoogleSignIn",
    link: "https://developers.google.com/identity/sign-in/ios"
  }
  static authenticationServices: Framework = {
    name: "AuthenticationServices",
    link: "https://developer.apple.com/documentation/authenticationservices"
  }
  static healthKit: Framework = {
    name: "HealthKit",
    link: "https://developer.apple.com/documentation/healthkit"
  }
  static mapKit: Framework = {
    name: "MapKit",
    link: "https://developer.apple.com/documentation/mapkit"
  }
  static deviceActivity: Framework = {
    name: "DeviceActivity",
    link: "https://developer.apple.com/documentation/deviceactivity"
  }
  static familyControls: Framework = {
    name: "FamilyControls",
    link: "https://developer.apple.com/documentation/familycontrols"
  }
  static managedSettings: Framework = {
    name: "ManagedSettings",
    link: "https://developer.apple.com/documentation/managedsettings"
  }
  static lottie: Framework = {
    name: "Lottie",
    link: "https://lottiefiles.com/"
  }
  static socketIO: Framework = {
    name: "SocketIO",
    link: "https://socket.io/"
  }
  static photoUI: Framework = {
    name: "PhotoUI",
    link: "https://developer.apple.com/documentation/photosui"
  }
  static tyradexkit: Framework = {
    name: "TyradexKit",
    link: "https://github.com/theosementa/TyradexKit"
  }
}