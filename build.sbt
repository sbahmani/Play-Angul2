name := """Play-Angul2"""

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayJava)

libraryDependencies += "com.auth0" % "java-jwt" % "2.1.0"

scalaVersion := "2.11.8"

libraryDependencies ++= Seq(
)
